const heatmap = document.getElementById('heatmap');

// 模拟一个月的天数  
const daysInMonth = 30; // 可以根据实际月份调整  
const attendance = new Array(daysInMonth).fill(0); // 初始化打卡记录  

// 创建热力图  
for (let i = 0; i < daysInMonth; i++) {
  const dayDiv = document.createElement('div');
  dayDiv.className = 'day';
  dayDiv.innerText = i + 1;

  // 根据打卡情况设置背景色  
  dayDiv.style.backgroundColor = getColor(attendance[i]);

  // 添加点击事件  
  dayDiv.addEventListener('click', () => {
    attendance[i] = attendance[i] === 0 ? 1 : 0; // 切换打卡状态  
    dayDiv.style.backgroundColor = getColor(attendance[i]);
  });

  heatmap.appendChild(dayDiv);
}

// 根据打卡情况返回颜色  
function getColor(status) {
  return status === 1 ? '#4caf50' : '#fff'; // 打卡为绿色，未打卡为白色  
}  