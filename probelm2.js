// 🧪 Agoda Frontend HackerRank – Another Common Question
// 🧩 Question Type: State + Data Transformation (Very Common at Agoda)
// 📌 Problem Statement

// You are given a list of price updates for a hotel room during a day.

// Each update represents a new price becoming active at a given time.

// [
//   { time: "09:00", price: 100 },
//   { time: "10:30", price: 120 },
//   { time: "13:00", price: 90 },
//   { time: "18:00", price: 150 }
// ]


// And a time range:

// startTime = "10:00"
// endTime   = "14:00"

// 🎯 Task

// Write a function that returns the average price between startTime and endTime.

// 🔹 Rules (important)

// Price remains active until the next update

// Times are on the same day

// If a price update happens inside the range, it applies from that moment

// Return a number (rounded down)

// 📤 Expected Output for above input
// 105

// 🧠 What Agoda is testing here

// Timeline reasoning (very Agoda-like)

// Correct handling of partial intervals

// Clean JavaScript logic

// Edge cases (start/end boundaries)

// 🧪 Function Signature
// function averagePrice(updates, startTime, endTime) {
//   // implement
// }

// ⛔ What NOT to do

// Don’t convert to minutes yet (think first)

// Don’t jump into coding

// Don’t assume updates start exactly at startTime

// Step 1️⃣ (same process as real interview)

// Answer this first (one sentence only):

// How do you conceptually break the time range into segments where the price is constant?

// Reply with your explanation only, not code.
// Once that’s clear, we’ll move to Step 2 🚀




function averagePrice(updates, startTime, endTime) {
  if (!updates || updates.length === 0) return 0;

  // helper: convert HH:MM → minutes
  const toMinutes = (time) => {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  };

  const start = toMinutes(startTime);
  const end = toMinutes(endTime);

  // convert updates to minutes and sort
  const events = updates
    .map(u => ({
      time: toMinutes(u.time),
      price: u.price
    }))
    .sort((a, b) => a.time - b.time);

  let totalCost = 0;
  let currentPrice = events[0].price;
  let currentTime = start;

  for (let i = 0; i < events.length; i++) {
    const eventTime = events[i].time;

    // skip updates before startTime
    if (eventTime <= start) {
      currentPrice = events[i].price;
      continue;
    }

    // stop if beyond endTime
    if (eventTime >= end) break;

    const duration = eventTime - currentTime;
    totalCost += duration * currentPrice;

    currentTime = eventTime;
    currentPrice = events[i].price;
  }

  // handle remaining time till end
  if (currentTime < end) {
    totalCost += (end - currentTime) * currentPrice;
  }

  const totalDuration = end - start;
  return Math.floor(totalCost / totalDuration);
}


const updates = [
  { time: "09:00", price: 100 },
  { time: "10:30", price: 120 },
  { time: "13:00", price: 90 },
  { time: "18:00", price: 150 }
];

console.log(averagePrice(updates, "10:00", "14:00"));
// ✅ Output: 105