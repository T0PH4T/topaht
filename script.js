function openClass(classId){
  // Hide all class contents
  document.querySelectorAll('.class-content').forEach(c => c.classList.remove('active'));
  // Show selected class
  document.getElementById(classId).classList.add('active');
  // Scroll smoothly
  document.getElementById(classId).scrollIntoView({behavior:"smooth"});
}
