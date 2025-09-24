import React, { useState } from "react";

export function ReservationSection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    dogName: "",
    selectedActivities: [] as string[],
    accommodation: "",
    extras: "",
    paymentInfo: ""
  });

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (activity: string) => {
    const selected = formData.selectedActivities.includes(activity)
      ? formData.selectedActivities.filter(a => a !== activity)
      : [...formData.selectedActivities, activity];
    setFormData({ ...formData, selectedActivities: selected });
  };

  const handleSubmit = () => {
    // TODO: submit logic
    alert("Prenotazione inviata!");
  };

  return (
    <section id="reservation" className="h-[80vh] bg-[var(--forest-light)] dark:bg-gray-800 flex flex-col justify-center p-8">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-heading mb-4">Prenotazione - Step {step} di 4</h2>
        {step === 1 && (
          <div className="space-y-4">
            <input name="name" placeholder="Nome" value={formData.name} onChange={handleChange} className="w-full p-3 border rounded" />
            <input name="surname" placeholder="Cognome" value={formData.surname} onChange={handleChange} className="w-full p-3 border rounded" />
            <input name="dogName" placeholder="Nome del Cane" value={formData.dogName} onChange={handleChange} className="w-full p-3 border rounded" />
          </div>
        )}
        {step === 2 && (
          <div className="space-y-4">
            <label className="font-semibold">Seleziona Attività:</label>
            {["Caccia al tartufo", "Addestramento", "Esperienza Gourmet"].map(act => (
              <div key={act}>
                <label>
                  <input type="checkbox" checked={formData.selectedActivities.includes(act)} onChange={() => handleCheckbox(act)} />
                  <span className="ml-2">{act}</span>
                </label>
              </div>
            ))}
          </div>
        )}
        {step === 3 && (
          <div className="space-y-4">
            <select name="accommodation" value={formData.accommodation} onChange={handleChange} className="w-full p-3 border rounded">
              <option value="">Seleziona Alloggio</option>
              <option>Agriturismo Le Cascate</option>
              <option>Hotel Monte Busca</option>
              <option>B&B Il Laghetto</option>
            </select>
            <textarea name="extras" placeholder="Extra" value={formData.extras} onChange={handleChange} className="w-full p-3 border rounded" />
          </div>
        )}
        {step === 4 && (
          <div className="space-y-4">
            <input name="paymentInfo" placeholder="Dati Pagamento" value={formData.paymentInfo} onChange={handleChange} className="w-full p-3 border rounded" />
            <button onClick={handleSubmit} className="w-full bg-[var(--primary)] text-white p-3 rounded font-bold">Conferma Prenotazione</button>
          </div>
        )}
        <div className="flex justify-between mt-6">
          <button disabled={step===1} onClick={prev} className="px-4 py-2 border rounded disabled:opacity-50">Indietro</button>
          {step < 4 ? (
            <button onClick={next} className="px-4 py-2 bg-[var(--primary)] text-white rounded">Avanti</button>
          ) : null}
        </div>
      </div>
    </section>
  );
}