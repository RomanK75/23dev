// Get all form elements
const form = document.getElementById("registration-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-conrm");
const birthDay = document.getElementById("birth-day");
const submitButton = document.getElementById("form-button");
const passwordControls = document.querySelectorAll(".password-control");

console.log("Js started");
// Validation rules
const rules = {
  firstname: {
    pattern: /^[A-Za-zА-Яа-яЁё]{2,30}$/,
    message: "Имя должно содержать только буквы (2-30 символов)",
  },
  lastname: {
    pattern: /^[A-Za-zА-Яа-яЁё]{2,30}$/,
    message: "Фамилия должна содержать только буквы (2-30 символов)",
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Введите корректный email адрес",
  },
  password: {
    pattern:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    message:
      "Пароль должен содержать минимум 8 символов, одну цифру, заглавную и строчную буквы и спецсимвол",
  },
};

// Add input event listeners
const inputs = [
  firstName,
  lastName,
  password,
  birthDay,
  email,
  passwordConfirm,
];
inputs.forEach((input) => {
  input.addEventListener("input", validateField);
});

// Add pass control listener
passwordControls.forEach((control) => {
  control.addEventListener("click", (e) => {
    e.preventDefault();
    const input = control.closest(".password-form").querySelector("input");
    if (input.type === "password") {
      input.type = "text";
      control.classList.add("view");
    } else {
      input.type = "password";
      control.classList.remove("view");
    }
  });
});

// email checking after user finishes typing (on blur)

function validateField(e) {
  const field = e.target;
  const fieldName = field.id.replace("-", "");
  let isValid = true;

  // Clear previous validation
  field.classList.remove("valid", "invalid");
  // Validate based on field type
  if (rules[fieldName]) {
    isValid = rules[fieldName].pattern.test(field.value);
    showError(field, isValid ? "" : rules[fieldName].message);
  }

  // Special validations
  if (field === passwordConfirm) {
    isValid = field.value === password.value;
    showError(field, isValid ? "" : "Пароли не совпадают");
  }

  if (field === birthDay) {
    isValid = validateAge(field.value);
    showError(field, isValid ? "" : "Вам должно быть не менее 18 лет");
  }
  field.classList.remove("valid", "invalid");
  field.classList.add(isValid ? "valid" : "invalid");
  checkFormValidity();
}

function validateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  const age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age >= 18;
}

function showError(field, message) {
  const errorElement = document.getElementById(`${field.id}-error`);
  if (errorElement) {
    errorElement.textContent = message;
  }
}

function checkFormValidity() {
  const isValid = inputs.every(
    (input) => input.classList.contains("valid") && input.value.trim() !== "",
  );
  submitButton.disabled = !isValid;
}

// Form submit handler
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!submitButton.disabled) {
    // Handle form submission
    console.log("Form submitted successfully!");
    inputs.forEach((input) => {
      input.value = "";
    });
    submitButton.disabled = true;
  }
});
