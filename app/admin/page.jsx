"use client";

import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import { BellIcon, User, CreditCard, ClipboardList, Cog, Menu, X } from "lucide-react";

// Dynamic imports for Recharts
const ResponsiveContainer = dynamic(() => import("recharts").then(mod => mod.ResponsiveContainer), { ssr: false });
const LineChart = dynamic(() => import("recharts").then(mod => mod.LineChart), { ssr: false });
const Line = dynamic(() => import("recharts").then(mod => mod.Line), { ssr: false });
const XAxis = dynamic(() => import("recharts").then(mod => mod.XAxis), { ssr: false });
const YAxis = dynamic(() => import("recharts").then(mod => mod.YAxis), { ssr: false });
const Tooltip = dynamic(() => import("recharts").then(mod => mod.Tooltip), { ssr: false });
const CartesianGrid = dynamic(() => import("recharts").then(mod => mod.CartesianGrid), { ssr: false });

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [selectedTab, setSelectedTab] = useState("users");
  const [filterDates, setFilterDates] = useState({ start:"", end:"" });
  const [socketConnected, setSocketConnected] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [settings, setSettings] = useState({
    websiteName:"TrekTrips",
    logoURL:"",
    contactEmail:"",
    contactPhone:"",
    currency:"USD",
    paymentMethods:"Credit Card, PayPal",
    notifications:true,
    adminName:"Admin",
    adminEmail:"admin@example.com",
    adminPassword:""
  });

  // Socket.io connect
  useEffect(() => {
    import("socket.io-client").then(({ io }) => {
      const socket = io("http://localhost:5000", { withCredentials:true });
      socket.on("connect", () => setSocketConnected(true));
      socket.on("disconnect", () => setSocketConnected(false));
      socket.on("newBooking", booking => {
        setBookings(prev => [booking,...prev]);
        setNotifications(prev => [`New booking: ${booking.destination} — ${booking.name||"Guest"}`, ...prev]);
      });
      return () => socket.disconnect();
    });
  }, []);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersRes, bookingsRes] = await Promise.all([
          axios.get("http://localhost:5000/api/users"),
          axios.get("http://localhost:5000/api/bookings")
        ]);
        setUsers(usersRes.data||[]);
        setBookings(bookingsRes.data||[]);
      } catch (err){ console.error(err); }
    };
    fetchData();
  }, []);

  const filteredBookings = useMemo(() => {
    if(!filterDates.start || !filterDates.end) return bookings;
    const start = new Date(filterDates.start);
    const end = new Date(filterDates.end); end.setHours(23,59,59,999);
    return bookings.filter(b=>b.date && new Date(b.date)>=start && new Date(b.date)<=end);
  }, [bookings, filterDates]);

  const totalRevenue = useMemo(() => filteredBookings.reduce((sum,b)=>sum+(Number(b.payment)||0),0), [filteredBookings]);

  const chartData = useMemo(()=>{
    const days=[];
    const today = new Date();
    for(let i=6;i>=0;i--){
      const d=new Date(today); d.setDate(today.getDate()-i);
      const key=d.toISOString().slice(0,10);
      days.push({key,label:d.toLocaleDateString(undefined,{month:"short",day:"numeric"}),revenue:0});
    }
    bookings.forEach(b=>{
      if(!b.date) return;
      const dateKey = new Date(b.date).toISOString().slice(0,10);
      const idx = days.findIndex(d=>d.key===dateKey);
      if(idx!==-1) days[idx].revenue += Number(b.payment)||0;
    });
    return days.map(d=>({date:d.label,revenue:d.revenue}));
  }, [bookings]);

  const clearFilter = ()=>setFilterDates({start:"",end:""});

  const SidebarButton = ({label, icon:Icon, tab})=>(
    <button onClick={()=>{setSelectedTab(tab); setSidebarOpen(false);}} className={`flex items-center gap-2 w-full p-2 rounded ${selectedTab===tab?"bg-[#0d4544] text-white":"hover:bg-gray-100"}`}>
      <Icon className="w-5 h-5"/> {label}
    </button>
  );

  const handleSettingsChange = e=>{
    const {name,value,type,checked} = e.target;
    setSettings(prev=>({...prev,[name]:type==="checkbox"?checked:value}));
  };

  return (
    <div className="min-h-screen flex bg-gray-100 relative">
      {sidebarOpen && <div onClick={()=>setSidebarOpen(false)} className="fixed inset-0 bg-black/30 z-20 md:hidden"></div>}

      {/* Sidebar */}
      <aside className={`fixed z-30 inset-y-0 left-0 w-64 bg-white shadow-md p-6 transform ${sidebarOpen?"translate-x-0":"-translate-x-full"} transition-transform duration-300 md:translate-x-0 md:static md:flex-shrink-0`}>
        <h2 className="text-xl font-bold mb-6 text-[#0d4544]">Admin Panel</h2>
        <nav className="space-y-2">
          <SidebarButton label="Users" icon={User} tab="users"/>
          <SidebarButton label="Bookings" icon={ClipboardList} tab="bookings"/>
          <SidebarButton label="Payments" icon={CreditCard} tab="payments"/>
          <SidebarButton label="Settings" icon={Cog} tab="settings"/>
        </nav>
      </aside>

      <main className="flex-1 p-4 md:p-6">
        {/* Topbar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2 rounded hover:bg-gray-200" onClick={()=>setSidebarOpen(!sidebarOpen)}>
              <Menu className="w-6 h-6"/>
            </button>
            <h1 className="text-2xl font-bold text-[#0d4544]">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded hover:bg-gray-200">
              <BellIcon className="w-7 h-7 text-gray-700"/>
              {notifications.length>0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{notifications.length}</span>}
            </button>
            <span className="text-sm text-gray-600">{socketConnected?"🟢 Live":"🔴 Offline"}</span>
          </div>
        </div>

        {/* Revenue chart */}
        <div className="bg-white rounded-xl shadow p-4 mb-6">
          <h3 className="text-lg font-semibold mb-2">Revenue (last 7 days)</h3>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="date"/>
                <YAxis/>
                <Tooltip formatter={v=>`$${v}`}/>
                <Line type="monotone" dataKey="revenue" stroke="#0d4544" strokeWidth={3} dot={{r:4}}/>
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-2 text-sm text-gray-500">Total Revenue: ${totalRevenue}</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow p-4">
          {selectedTab==="users" && (
            <div className="overflow-x-auto">
              <h2 className="text-lg font-semibold mb-2">Users</h2>
              <table className="min-w-full text-left">
                <thead className="bg-[#0d4544] text-white">
                  <tr>
                    <th className="py-2 px-4">Name</th>
                    <th className="py-2 px-4">Email</th>
                    <th className="py-2 px-4">Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(u=>(
                    <tr key={u._id} className="border-b hover:bg-gray-50 cursor-pointer" onClick={()=>setModalData({type:"user", data:u})}>
                      <td className="py-2 px-4">{u.firstName} {u.lastName}</td>
                      <td className="py-2 px-4">{u.email}</td>
                      <td className="py-2 px-4">{u.phone||"-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {selectedTab==="bookings" && (
            <div className="overflow-x-auto">
              <h2 className="text-lg font-semibold mb-2">Bookings</h2>
              <table className="min-w-full text-left">
                <thead className="bg-[#0d4544] text-white">
                  <tr>
                    <th className="py-2 px-4">User</th>
                    <th className="py-2 px-4">Destination</th>
                    <th className="py-2 px-4">Travelers</th>
                    <th className="py-2 px-4">Date</th>
                    <th className="py-2 px-4">Payment</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.map(b=>(
                    <tr key={b._id} className="border-b hover:bg-gray-50 cursor-pointer" onClick={()=>setModalData({type:"booking", data:b})}>
                      <td className="py-2 px-4">{b.userId?.firstName||b.name||"Guest"} {b.userId?.lastName||""}</td>
                      <td className="py-2 px-4">{b.destination}</td>
                      <td className="py-2 px-4">{b.travelers}</td>
                      <td className="py-2 px-4">{b.date?new Date(b.date).toLocaleDateString():"-"}</td>
                      <td className="py-2 px-4">${b.payment||0}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {selectedTab==="payments" && (
            <div className="overflow-x-auto">
              <h2 className="text-lg font-semibold mb-2">Payments</h2>
              <table className="min-w-full text-left">
                <thead className="bg-[#0d4544] text-white">
                  <tr>
                    <th className="py-2 px-4">User</th>
                    <th className="py-2 px-4">Destination</th>
                    <th className="py-2 px-4">Payment</th>
                    <th className="py-2 px-4">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.map(b=>(
                    <tr key={b._id} className="border-b hover:bg-gray-50 cursor-pointer" onClick={()=>setModalData({type:"payment", data:b})}>
                      <td className="py-2 px-4">{b.userId?.firstName||b.name||"Guest"} {b.userId?.lastName||""}</td>
                      <td className="py-2 px-4">{b.destination}</td>
                      <td className="py-2 px-4">${b.payment||0}</td>
                      <td className="py-2 px-4">{b.date?new Date(b.date).toLocaleDateString():"-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {selectedTab==="settings" && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold mb-2">Website Settings</h2>
              <div className="space-y-3 max-w-md">
                <input type="text" name="websiteName" value={settings.websiteName} onChange={handleSettingsChange} placeholder="Website Name" className="border rounded p-2 w-full"/>
                <input type="text" name="logoURL" value={settings.logoURL} onChange={handleSettingsChange} placeholder="Logo URL" className="border rounded p-2 w-full"/>
                <input type="email" name="contactEmail" value={settings.contactEmail} onChange={handleSettingsChange} placeholder="Contact Email" className="border rounded p-2 w-full"/>
                <input type="text" name="contactPhone" value={settings.contactPhone} onChange={handleSettingsChange} placeholder="Contact Phone" className="border rounded p-2 w-full"/>
                <input type="text" name="currency" value={settings.currency} onChange={handleSettingsChange} placeholder="Default Currency" className="border rounded p-2 w-full"/>
                <input type="text" name="paymentMethods" value={settings.paymentMethods} onChange={handleSettingsChange} placeholder="Payment Methods" className="border rounded p-2 w-full"/>
                <label className="flex items-center gap-2"><input type="checkbox" name="notifications" checked={settings.notifications} onChange={handleSettingsChange}/> Enable Notifications</label>
              </div>
              <h2 className="text-lg font-semibold mb-2 mt-4">Admin Account</h2>
              <div className="space-y-3 max-w-md">
                <input type="text" name="adminName" value={settings.adminName} onChange={handleSettingsChange} placeholder="Admin Name" className="border rounded p-2 w-full"/>
                <input type="email" name="adminEmail" value={settings.adminEmail} onChange={handleSettingsChange} placeholder="Admin Email" className="border rounded p-2 w-full"/>
                <input type="password" name="adminPassword" value={settings.adminPassword} onChange={handleSettingsChange} placeholder="Admin Password" className="border rounded p-2 w-full"/>
                <button className="bg-[#0d4544] text-white py-2 px-4 rounded">Save Settings</button>
              </div>
            </div>
          )}
        </div>

        {/* Modal */}
        {modalData && (
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-xl shadow-lg p-6 w-11/12 md:w-2/3 relative">
              <button onClick={()=>setModalData(null)} className="absolute top-3 right-3 p-1 rounded hover:bg-gray-200">
                <X className="w-5 h-5"/>
              </button>
              {modalData.type==="user" && (
                <>
                  <h2 className="text-xl font-semibold mb-4">User Details</h2>
                  <p><strong>Name:</strong> {modalData.data.firstName} {modalData.data.lastName}</p>
                  <p><strong>Email:</strong> {modalData.data.email}</p>
                  <p><strong>Phone:</strong> {modalData.data.phone||"-"}</p>
                </>
              )}
              {(modalData.type==="booking" || modalData.type==="payment") && (
                <>
                  <h2 className="text-xl font-semibold mb-4">{modalData.type==="booking"?"Booking Details":"Payment Details"}</h2>
                  <p><strong>User:</strong> {modalData.data.userId?.firstName||modalData.data.name||"Guest"} {modalData.data.userId?.lastName||""}</p>
                  <p><strong>Email:</strong> {modalData.data.userId?.email||"N/A"}</p>
                  <p><strong>Destination:</strong> {modalData.data.destination}</p>
                  <p><strong>Travelers:</strong> {modalData.data.travelers}</p>
                  <p><strong>Payment:</strong> ${modalData.data.payment||0}</p>
                  <p><strong>Date:</strong> {modalData.data.date?new Date(modalData.data.date).toLocaleDateString():"-"}</p>
                  <p><strong>Status:</strong> {modalData.data.status||"Completed"}</p>
                </>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
