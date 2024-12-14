document.addEventListener("DOMContentLoaded", function () {
    var nameInput = document.getElementById("nameInput");
    var emailInput = document.getElementById("emailInput");
    var phoneInput = document.getElementById("phoneInput");
    var educationInput = document.getElementById("educationInput");
    var addEducationButton = document.getElementById("addEducationButton");
    var educationList = document.getElementById("educationList");
    var workInput = document.getElementById("workInput");
    var addWorkButton = document.getElementById("addWorkButton");
    var workList = document.getElementById("workList");
    var skillInput = document.getElementById("skillInput");
    var addSkillButton = document.getElementById("addSkillButton");
    var skillList = document.getElementById("skillList");
    var generateResumeButton = document.getElementById("generateResumeButton");
    var resumeOutput = document.getElementById("resumeOutput");
    var educationArray = [];
    var workArray = [];
    var skillArray = [];
    addEducationButton.addEventListener("click", function () {
        var education = educationInput.value.trim();
        if (education) {
            educationArray.push(education);
            var listItem = document.createElement("li");
            listItem.textContent = education;
            educationList.appendChild(listItem);
            educationInput.value = "";
        }
    });
    addWorkButton.addEventListener("click", function () {
        var work = workInput.value.trim();
        if (work) {
            workArray.push(work);
            var listItem = document.createElement("li");
            listItem.textContent = work;
            workList.appendChild(listItem);
            workInput.value = "";
        }
    });
    addSkillButton.addEventListener("click", function () {
        var skill = skillInput.value.trim();
        if (skill) {
            skillArray.push(skill);
            var listItem = document.createElement("li");
            listItem.textContent = skill;
            skillList.appendChild(listItem);
            skillInput.value = "";
        }
    });
    generateResumeButton.addEventListener("click", function () {
        resumeOutput.innerHTML = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> ".concat(nameInput.value, "</p>\n            <p><strong>Email:</strong> ").concat(emailInput.value, "</p>\n            <p><strong>Phone:</strong> ").concat(phoneInput.value, "</p>\n            <h3>Education</h3>\n            <ul>").concat(educationArray.map(function (edu) { return "<li>".concat(edu, "</li>"); }).join(''), "</ul>\n            <h3>Work Experience</h3>\n            <ul>").concat(workArray.map(function (work) { return "<li>".concat(work, "</li>"); }).join(''), "</ul>\n            <h3>Skills</h3>\n            <ul>").concat(skillArray.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "</ul>\n        ");
    });
});
