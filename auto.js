
var allHistory = [
    ["2026/01/02","(五)",["17","18","25","36","39"]],
    ["2026/01/01","(四)",["15","16","18","29","36"]]
];

// --- 自動運算中心 (勿動) ---
var myday = allHistory[0];
var mydate = myday[0];
var last = allHistory.slice(0, 100).map(d => d[2]);

// 初始次數直接讀取 base[1]
var times = [...base[1]]; 

allHistory.forEach(item => {
    // 只有日期在 base[0] 之後的才加進次數
    if (item[0] >= base[0]) {
        item[2].forEach(n => {
            let idx = parseInt(n) - 1;
            if (idx >= 0 && idx < 39) times[idx]++;
        });
    }
});
