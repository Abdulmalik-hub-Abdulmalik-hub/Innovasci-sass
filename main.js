
async function loadCourses() {
  const { data } = await supabase.from('courses').select('*').order('id');
  const container = document.getElementById('courses');
  if(!container) return;
  container.innerHTML = "";
  data.forEach(c => {
    container.innerHTML += `
      <div class="card">
        <h3>${c.title}</h3>
        <p>${c.description}</p>
        <button onclick="enroll('${c.id}')">Enroll</button>
      </div>
    `;
  });
}

async function enroll(courseId){
  alert("Redirect to payment workflow for course: " + courseId);
}

window.onload = () => {
  if(document.getElementById("courses")){
    loadCourses();
  }
};
