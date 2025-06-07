import emailjs from '@emailjs/browser';


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



function sendMail(name, email, message) {
  const params = {
    name: name,
    email: email,
    message: message,
  };

  console.log("Sending to EmailJS:", params);

  return emailjs.send(
    "service_cp38ojf",         
    "template_m5am52f",       
    params,
    "4qZLuWaEjtRhE70RW"          
  );
}



export { getFormattedDate, getFormattedTime, toggleContent, sendMail };