with open('assets/StudyMCQ.html', 'r') as f:
    html = f.read()

timer_css = """
.timer-bar-wrap{background:rgba(255,255,255,0.1);border-radius:10px;height:8px;margin:10px 0 15px 0;overflow:hidden;}
.timer-bar{height:8px;border-radius:10px;background:linear-gradient(90deg,#00ff88,#ffea00);transition:width 1s linear;}
.timer-text{text-align:right;font-size:12px;color:#38b6ff;margin-bottom:4px;}
"""
html = html.replace('</style>', timer_css + '</style>', 1)

timer_html = '<div class="timer-text" id="timer-text">⏱ 40s</div><div class="timer-bar-wrap"><div class="timer-bar" id="timer-bar" style="width:100%"></div></div>'
html = html.replace('<div class="question-text" id="q-display">', timer_html + '<div class="question-text" id="q-display">', 1)

timer_js = """
  if(window._timerInterval) clearInterval(window._timerInterval);
  var timeLeft = 40;
  var timerBar = document.getElementById('timer-bar');
  var timerText = document.getElementById('timer-text');
  if(timerBar) timerBar.style.width = '100%';
  if(timerBar) timerBar.style.background = 'linear-gradient(90deg,#00ff88,#ffea00)';
  if(timerText) timerText.textContent = '⏱ 40s';
  window._timerInterval = setInterval(function(){
    timeLeft--;
    if(timerBar) timerBar.style.width = (timeLeft/40*100) + '%';
    if(timerText) timerText.textContent = '⏱ ' + timeLeft + 's';
    if(timeLeft <= 10 && timerBar) timerBar.style.background = 'linear-gradient(90deg,#ff4444,#ff8800)';
    if(timeLeft <= 0){ clearInterval(window._timerInterval); if(!answered) checkAnswer(-1, correctIdx); }
  }, 1000);
"""
html = html.replace('function renderQuestion() {', 'function renderQuestion() {' + timer_js, 1)

with open('assets/StudyMCQ.html', 'w') as f:
    f.write(html)
print("Done!")
