
async function addCourse(){
  const title = document.getElementById('title').value;
  const desc = document.getElementById('desc').value;
  await supabase.from('courses').insert([{title, description: desc}]);
  alert("Course Added!");
}

async function deleteCourse(id){
  await supabase.from('courses').delete().eq('id', id);
  alert("Course Deleted!");
}
