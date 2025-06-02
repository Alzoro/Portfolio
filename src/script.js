function getFormattedDate() {
    const now = new Date();
    const optionsDate = { weekday: 'short', month: 'short', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', optionsDate);

    return formattedDate;
}

function getFormattedTime() {
    const now = new Date();
    const optionsTime = { hour: 'numeric', minute: '2-digit', hour12: true };
    const formattedTime = now.toLocaleTimeString('en-US', optionsTime);
    
    return formattedTime;
}

function toggleContent(currentIndex, selectedIndex) {
  return currentIndex === selectedIndex ? null : selectedIndex;
}


export { getFormattedDate, getFormattedTime, toggleContent };