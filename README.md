# user-pass
<userpass html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Username and Password Generator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    .form-group {
      margin-bottom: 15px;
    }
    label {
      display: block;
      margin-bottom: 5px;
    }
    input {
      padding: 8px;
      width: 100%;
      box-sizing: border-box;
    }
    button {
      padding: 10px 20px;
      margin-top: 10px;
    }
    .result {
      margin-top: 20px;
      font-weight: bold;
    }
  </style>
</head>
<body>

<h1>Username and Password Generator</h1>
<div class="form-group">
  <label for="firstName">First Name:</label>
  <input type="text" id="firstName" placeholder="Enter your first name">
</div>
<div class="form-group">
  <label for="lastName">Last Name:</label>
  <input type="text" id="lastName" placeholder="Enter your last name">
</div>
<button onclick="generateCredentials()">Generate</button>

<div class="result" id="result"></div>

<script>
  function usernameGenerator(firstName, lastName) {
    let userName = firstName.length < 3 ? firstName : firstName.slice(0, 3);
    userName += lastName.length < 4 ? lastName : lastName.slice(0, 4);
    return userName;
  }

  function passwordGenerator(userName) {
    let password = '';
    for (let i = 0; i < userName.length; i++) {
      password += userName[(i - 1 + userName.length) % userName.length];
    }
    return password;
  }

  function generateCredentials() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    if (!firstName || !lastName) {
      document.getElementById('result').innerText = 'Please enter both first and last names.';
      return;
    }

    const userName = usernameGenerator(firstName, lastName);
    const password = passwordGenerator(userName);

    document.getElementById('result').innerHTML = `
      <p>Generated Username: <strong>${userName}</strong></p>
      <p>Generated Password: <strong>${password}</strong></p>
    `;
  }
</script>

</body>
</html>
