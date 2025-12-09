import { Utensils, Car, Building2, Scissors, Heart, Film, Shirt, ChefHat } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function Industries() {
  const t = useTranslation().industries;

  const industries = [
    {
      icon: Utensils,
      title: t.restaurants,
      features: [
        t.viewWaitingList,
        t.reserveTables,
        t.trackOrders,
        t.onlinePayment,
        t.serviceRatings,
      ],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: ChefHat,
      title: t.cloudKitchens,
      features: [
        t.followOrderPrep,
        t.payAdvance,
        t.pickupNotifications,
        t.rateFoodQuality,
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Car,
      title: t.carAgencies,
      features: [
        t.bookMaintenance,
        t.reduceDealershipWait,
        t.serviceTracking,
        t.digitalCheckIn,
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Building2,
      title: t.banks,
      features: [
        t.bookQueueFromHome,
        t.chooseServiceATM,
        t.trackYourTurn,
        t.minimizeBranchTime,
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Scissors,
      title: t.salons,
      features: [
        t.bookAppointments,
        t.selectStylist,
        t.serviceReminders,
        t.loyaltyRewards,
      ],
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Heart,
      title: t.hospitals,
      features: [
        t.scheduleAppointments,
        t.virtualCheckIn,
        t.waitingRoomUpdates,
        t.prescriptionTracking,
      ],
      gradient: 'from-red-500 to-pink-500',
    },
    {
      icon: Film,
      title: t.cinemas,
      features: [
        t.bookTicketsOnline,
        t.selectSeats,
        t.skipBoxOffice,
        t.concessionPreOrders,
      ],
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Shirt,
      title: t.laundry,
      features: [
        t.schedulePickup,
        t.trackCleaningProgress,
        t.deliveryNotifications,
        t.paymentProcessing,
      ],
      gradient: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-6">
            <span className="text-purple-700 dark:text-purple-400 font-semibold text-sm">{t.badge}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {t.title1}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-900 dark:from-purple-400 dark:to-purple-600"> {t.title2}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative bg-white dark:bg-gray-800 p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-700 hover:shadow-2xl transition-all duration-500">
                  <div className={`w-16 h-16 bg-gradient-to-br ${industry.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    {industry.title}
                  </h3>

                  <ul className="space-y-2">
                    {industry.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${industry.gradient} mt-1.5 flex-shrink-0`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            {t.dontSeeIndustry}
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300">
            {t.exploreAllSolutions}
          </button>
        </div>
      </div>
    </section>
  );
}
