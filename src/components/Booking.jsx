import React, { useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

const Booking = () => {
  const [form, setForm] = useState({
    patient_name: '',
    email: '',
    phone: '',
    appointment_date: '',
    appointment_time: '',
    service: 'Comprehensive Exam',
    notes: '',
  });
  const [status, setStatus] = useState({ loading: false, success: null, message: '' });

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: '' });
    try {
      const res = await fetch(`${API_BASE}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          appointment_date: form.appointment_date,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || 'Something went wrong');
      setStatus({ loading: false, success: true, message: 'Appointment booked! We\'ll email you shortly.' });
      setForm({ patient_name: '', email: '', phone: '', appointment_date: '', appointment_time: '', service: 'Comprehensive Exam', notes: '' });
    } catch (err) {
      setStatus({ loading: false, success: false, message: err.message });
    }
  };

  const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <section id="booking" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">Book an appointment</h2>
          <p className="mt-3 text-sky-100/80">Choose your preferred date and time. We\'ll confirm by email.</p>
          <ul className="mt-6 space-y-3 text-sky-100/80">
            <li>• Open Mon–Sat, 8am–7pm</li>
            <li>• Emergency same‑day slots available</li>
            <li>• Most insurance accepted</li>
          </ul>
        </div>

        <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm text-sky-100">Full name</label>
              <input name="patient_name" value={form.patient_name} onChange={onChange} required className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 outline-none ring-sky-500/40 focus:ring-2" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-sky-100">Email</label>
              <input type="email" name="email" value={form.email} onChange={onChange} required className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 outline-none ring-sky-500/40 focus:ring-2" placeholder="jane@email.com" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-sky-100">Phone</label>
              <input name="phone" value={form.phone} onChange={onChange} required className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 outline-none ring-sky-500/40 focus:ring-2" placeholder="(555) 123‑4567" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-sky-100">Date</label>
              <input type="date" name="appointment_date" value={form.appointment_date} onChange={onChange} required className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 outline-none ring-sky-500/40 focus:ring-2" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-sky-100">Time</label>
              <input type="time" name="appointment_time" value={form.appointment_time} onChange={onChange} required className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 outline-none ring-sky-500/40 focus:ring-2" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm text-sky-100">Service</label>
              <select name="service" value={form.service} onChange={onChange} className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 outline-none ring-sky-500/40 focus:ring-2">
                <option>Comprehensive Exam</option>
                <option>Cosmetic Consultation</option>
                <option>Cleaning & Preventive Care</option>
                <option>Invisalign Assessment</option>
                <option>Emergency Visit</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm text-sky-100">Notes</label>
              <textarea name="notes" value={form.notes} onChange={onChange} rows="3" className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 outline-none ring-sky-500/40 focus:ring-2" placeholder="Tell us anything we should know" />
            </div>
          </div>

          <button disabled={status.loading} className="mt-6 w-full rounded-xl bg-sky-500 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-sky-500/30 transition hover:brightness-110 disabled:opacity-60">
            {status.loading ? 'Booking...' : 'Book appointment'}
          </button>
          {status.message && (
            <p className={`mt-3 text-sm ${status.success ? 'text-emerald-400' : 'text-rose-400'}`}>{status.message}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Booking;
