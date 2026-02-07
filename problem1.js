//  Good — you followed instructions 👍
// Now let’s **evaluate Section 1 exactly like a real HackerRank system**.

// ---

// # 🧪 SECTION 1 RESULTS (MCQs)

// ### ✅ Correct Answers

// | Q  | Your | Correct | Status |
// | -- | ---- | ------- | ------ |
// | 1  | B    | **B**   | ✅      |
// | 2  | A    | **A**   | ✅      |
// | 3  | D    | **D**   | ✅      |
// | 4  | B    | **B**   | ✅      |
// | 5  | B    | **B**   | ✅      |
// | 6  | B    | **B**   | ✅      |
// | 7  | B    | **B**   | ✅      |
// | 8  | C    | **C**   | ✅      |
// | 9  | C    | **C**   | ✅      |
// | 10 | B    | **B**   | ✅      |

// 🎯 **Score: 10 / 10**
// This is **Agoda-clearing level** MCQ performance.

// ---

// # 🕐 SECTION 2: CODING CHALLENGE (40 minutes)

// This is the **deciding round**.

// ---

// ## 🧩 Problem Statement

// You are given a list of bookings.
// Each booking has:

// ```js
// {
//   id: number,
//   checkIn: "YYYY-MM-DD",
//   checkOut: "YYYY-MM-DD"
// }
// ```

// ### 🔹 Rules

// * `checkOut` day is **NOT included** (hotel rule)
// * Return the **maximum number of rooms required at any time**

// ---

// ### 📥 Input

// ```js
// [
//   { id: 1, checkIn: "2024-01-01", checkOut: "2024-01-03" },
//   { id: 2, checkIn: "2024-01-02", checkOut: "2024-01-05" },
//   { id: 3, checkIn: "2024-01-03", checkOut: "2024-01-06" }
// ]
// ```

// ### 📤 Output

// ```js
// 2
// ```

// ---

// ## 🧠 Hints (Agoda-style, minimal)

// * Overlapping date ranges
// * Efficient solution preferred
// * Edge cases matter

// ---

// ## 🧪 Function Signature

// ```js
// function maxRoomsRequired(bookings) {
//   // your code
// }
// ```

// ---

// ### ⏱️ Rules

// * Write **clean JavaScript**
// * No libraries
// * Assume valid date strings

// ---

// ✍️ **Write your solution now.**
// Once you submit, I’ll:

// * Test edge cases
// * Score it like Agoda
// * Suggest optimizations if needed

 
 
 
 
 
 
 function maxRoomRequired(bookings) {
    if(!bookings || !bookings.length) 
        return 0;
    const events = [];
    for( const booking of bookings) {
        events.push({ date: booking.checkIn, type: 'checkIn' });
        events.push({ date: booking.checkOut, type: 'checkOut' });
    }

    events.sort((a,b) => {
        if(a.date != b.date) {
            return a.date.localeCompare(b.date);
        }
        return a.type === 'checkOut' ? -1 : 1;
 });
 
 let currentRooms = 0;
    let maxRooms = 0;

    for(const event of events) {
        if(event.type === 'checkIn') {
            currentRooms++;
            maxRooms = Math.max(maxRooms, currentRooms);
        } else {
            currentRooms--;
        }
    }

    return maxRooms;
}

// Example usage:
const bookings = [
  { id: 1, checkIn: "2024-01-01", checkOut: "2024-01-03" },
  { id: 2, checkIn: "2024-01-02", checkOut: "2024-01-05" },
  { id: 3, checkIn: "2024-01-03", checkOut: "2024-01-06" }
]

console.log(maxRoomRequired(bookings)); // Output: 2
