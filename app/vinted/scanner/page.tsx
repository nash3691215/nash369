'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ParsedData {
  totalRevenue: number;
  totalFees: number;
  netGains: number;
  averagePrice: number;
  salesCount: number;
  commissionRate: number;
  transactions: Array<{
    date: string;
    price: number;
    fees: number;
    net: number;
  }>;
}

export default function VintedScanner() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ParsedData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError(null);
      setData(null);
    }
  };

  const handleAnalyze = async () => {
    if (!file) {
      setError('Veuillez sélectionner un fichier');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('screenshot', file);

      const response = await fetch('/api/parse-vinted-screenshot', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'analyse');
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  const exportToExcel = () => {
    if (!data) return;

    // Simple CSV export
    let csv = 'Date,Prix,Frais,Net\n';
    data.transactions.forEach((t) => {
      csv += `${t.date},${t.price},${t.fees},${t.net}\n`;
    });
    csv += `\nRésumé\n`;
    csv += `Revenus totaux,${data.totalRevenue}\n`;
    csv += `Frais totaux,${data.totalFees}\n`;
    csv += `Gains nets,${data.netGains}\n`;
    csv += `Prix moyen,${data.averagePrice}\n`;
    csv += `Nombre de ventes,${data.salesCount}\n`;
    csv += `Taux de commission,${data.commissionRate}%\n`;

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vinted-analysis.csv';
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-50">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/vinted" className="flex items-center gap-3">
              <span className="text-2xl font-bold text-gray-900">NASH369</span>
              <span className="text-gray-400">/</span>
              <span className="text-xl text-cyan-600">Scanner Vinted</span>
            </Link>
            <Link
              href="/"
              className="text-gray-600 hover:text-cyan-600 transition-colors font-semibold"
            >
              ← Retour
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-bold">
              🎯 Scanner Vinted - Analyse IA
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Analyse tes ventes en 1 clic
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload ton screenshot Vinted et obtiens un dashboard complet en 10 secondes
          </p>
        </div>

        {/* Upload section */}
        {!data && (
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="max-w-xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Upload ton screenshot
              </h2>

              {/* File input */}
              <div className="mb-6">
                <label className="block w-full">
                  <div className="border-2 border-dashed border-cyan-300 rounded-xl p-12 text-center hover:border-cyan-500 transition-colors cursor-pointer bg-gradient-to-br from-cyan-50/50 to-white">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept="image/*"
                      className="hidden"
                    />
                    <div className="text-6xl mb-4">📸</div>
                    {file ? (
                      <div>
                        <p className="text-lg font-semibold text-gray-900 mb-2">
                          {file.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          Cliquer pour changer
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-lg font-semibold text-gray-900 mb-2">
                          Cliquer pour sélectionner
                        </p>
                        <p className="text-sm text-gray-600">
                          PNG, JPG, JPEG acceptés
                        </p>
                      </div>
                    )}
                  </div>
                </label>
              </div>

              {/* Error */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-center">{error}</p>
                </div>
              )}

              {/* Analyze button */}
              <button
                onClick={handleAnalyze}
                disabled={!file || loading}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-200 ${
                  !file || loading
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:from-cyan-600 hover:to-teal-600 shadow-lg hover:shadow-xl'
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Analyse en cours...
                  </span>
                ) : (
                  'Analyser maintenant'
                )}
              </button>

              {/* Info */}
              <div className="mt-8 p-4 bg-cyan-50 rounded-lg border border-cyan-100">
                <h3 className="font-semibold text-gray-900 mb-2">💡 Comment ça marche ?</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>Prends un screenshot de ton tableau de ventes Vinted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>Upload l'image ici</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>L'IA analyse et génère ton dashboard en 10 secondes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>Exporte en Excel si besoin</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Results section */}
        {data && (
          <div className="space-y-8">
            {/* Header with actions */}
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900">
                Ton Dashboard
              </h2>
              <div className="flex gap-4">
                <button
                  onClick={exportToExcel}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  Export Excel
                </button>
                <button
                  onClick={() => {
                    setData(null);
                    setFile(null);
                  }}
                  className="px-6 py-3 border-2 border-cyan-500 text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition-all"
                >
                  Nouvelle analyse
                </button>
              </div>
            </div>

            {/* KPIs Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {/* Revenus totaux */}
              <div className="bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl p-6 text-white shadow-lg">
                <div className="text-sm font-semibold mb-2 opacity-90">Revenus totaux</div>
                <div className="text-4xl font-bold">{data.totalRevenue.toFixed(2)}€</div>
              </div>

              {/* Frais Vinted */}
              <div className="bg-white rounded-2xl p-6 border-2 border-red-200 shadow-lg">
                <div className="text-sm font-semibold text-gray-600 mb-2">Frais Vinted</div>
                <div className="text-4xl font-bold text-red-600">-{data.totalFees.toFixed(2)}€</div>
              </div>

              {/* Gains nets */}
              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-6 text-white shadow-lg">
                <div className="text-sm font-semibold mb-2 opacity-90">Gains nets</div>
                <div className="text-4xl font-bold">{data.netGains.toFixed(2)}€</div>
              </div>

              {/* Prix moyen */}
              <div className="bg-white rounded-2xl p-6 border-2 border-cyan-200 shadow-lg">
                <div className="text-sm font-semibold text-gray-600 mb-2">Prix moyen</div>
                <div className="text-4xl font-bold text-cyan-600">{data.averagePrice.toFixed(2)}€</div>
              </div>

              {/* Nombre de ventes */}
              <div className="bg-white rounded-2xl p-6 border-2 border-teal-200 shadow-lg">
                <div className="text-sm font-semibold text-gray-600 mb-2">Ventes</div>
                <div className="text-4xl font-bold text-teal-600">{data.salesCount}</div>
              </div>

              {/* Taux de commission */}
              <div className="bg-white rounded-2xl p-6 border-2 border-orange-200 shadow-lg">
                <div className="text-sm font-semibold text-gray-600 mb-2">Commission</div>
                <div className="text-4xl font-bold text-orange-600">{data.commissionRate.toFixed(1)}%</div>
              </div>
            </div>

            {/* Transactions table */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 bg-gradient-to-r from-cyan-500 to-teal-500">
                <h3 className="text-xl font-bold text-white">
                  Détail des transactions ({data.transactions.length})
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Prix</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Frais</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Net</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {data.transactions.map((transaction, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-900">{transaction.date}</td>
                        <td className="px-6 py-4 text-sm text-right font-semibold text-gray-900">
                          {transaction.price.toFixed(2)}€
                        </td>
                        <td className="px-6 py-4 text-sm text-right font-semibold text-red-600">
                          -{transaction.fees.toFixed(2)}€
                        </td>
                        <td className="px-6 py-4 text-sm text-right font-bold text-emerald-600">
                          {transaction.net.toFixed(2)}€
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Summary card */}
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 border border-cyan-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Résumé de l'analyse</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Total des ventes:</span> {data.salesCount} transactions
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Revenus bruts:</span> {data.totalRevenue.toFixed(2)}€
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Frais totaux:</span> {data.totalFees.toFixed(2)}€ ({data.commissionRate.toFixed(1)}%)
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Gains nets:</span> {data.netGains.toFixed(2)}€
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Prix moyen:</span> {data.averagePrice.toFixed(2)}€
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Gain net moyen:</span> {(data.netGains / data.salesCount).toFixed(2)}€
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 mb-2">
            Made with ❤️ by Nash369
          </p>
          <p className="text-sm text-gray-500">
            Powered by Claude AI Vision
          </p>
        </div>
      </footer>
    </div>
  );
}
