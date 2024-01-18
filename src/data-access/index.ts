export function getAmount() {
  // Code to get amount donated and target here
  return { target: 10000, reached: 6700 };
  //dummy data
}

export function getRecentDonations() {
  //Donation data fetching logic here
  return [
    {
      donorName: "John Doe",
      amount: 100.0,
      currency: "USD",
      date: "2024-01-18T08:30:00Z",
      message: "Thank you for your great work!",
    },
    {
      donorName: "Jane Smith",
      amount: 50.5,
      currency: "EUR",
      date: "2024-01-17T15:45:00Z",
      message: "Keep up the amazing efforts!",
    },
    {
      donorName: "Robert Johnson",
      amount: 200.75,
      currency: "CAD",
      date: "2024-01-16T12:10:00Z",
      message: "Happy to contribute to a worthy cause.",
    },
    {
      donorName: "Alice Brown",
      amount: 75.25,
      currency: "GBP",
      date: "2024-01-15T18:20:00Z",
      message: "In support of your mission.",
    },
    {
      donorName: "Michael Anderson",
      amount: 120.0,
      currency: "AUD",
      date: "2024-01-14T09:55:00Z",
      message: "Proud to be part of this community.",
    },
  ];
}
