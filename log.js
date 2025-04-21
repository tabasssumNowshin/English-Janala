// Login
document.getElementById('login').addEventListener('click', (e) => {
  
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
  
    if (name === '') {
        alert('Enter Your Name')
  
    } else {
        if (name != " " && password === '123456') {
            document.getElementById('nav-bar').classList.remove('hidden');
            document.getElementById('learn').classList.remove('hidden');
            document.getElementById('faq').classList.remove('hidden');
            document.getElementById('banner').classList.add('hidden');
  
            alert("Successfully Log In")
            Swal.fire({
              title: "Congratulations!Log In",
              icon: "success",
              draggable: true,
            })
  
        } else {
            alert("Enter Your Password")
            Swal.fire({
              title: "iNVALID",
              icon: "warning",
              draggable: true,
            });
        }
    }
  })
  
  
  // Logout
  document.getElementById('Logout').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('nav-bar').classList.add('hidden');
    document.getElementById('learn').classList.add('hidden');
    document.getElementById('faq').classList.add('hidden');
    document.getElementById('banner').classList.remove('hidden');
  
  
    Swal.fire({
      title: "Log Out",
      icon: " ",
      draggable: true,
    });;
  
  })