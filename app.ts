document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("nameInput") as HTMLInputElement;
    const emailInput = document.getElementById("emailInput") as HTMLInputElement;
    const phoneInput = document.getElementById("phoneInput") as HTMLInputElement;

    const educationInput = document.getElementById("educationInput") as HTMLInputElement;
    const addEducationButton = document.getElementById("addEducationButton") as HTMLButtonElement;
    const educationList = document.getElementById("educationList") as HTMLUListElement;

    const workInput = document.getElementById("workInput") as HTMLInputElement;
    const addWorkButton = document.getElementById("addWorkButton") as HTMLButtonElement;
    const workList = document.getElementById("workList") as HTMLUListElement;

    const skillInput = document.getElementById("skillInput") as HTMLInputElement;
    const addSkillButton = document.getElementById("addSkillButton") as HTMLButtonElement;
    const skillList = document.getElementById("skillList") as HTMLUListElement;

    const generateResumeButton = document.getElementById("generateResumeButton") as HTMLButtonElement;
    const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;

    const educationArray: string[] = [];
    const workArray: string[] = [];
    const skillArray: string[] = [];

    addEducationButton.addEventListener("click", () => {
        const education = educationInput.value.trim();
        if (education) {
            educationArray.push(education);
            const listItem = document.createElement("li");
            listItem.textContent = education;
            educationList.appendChild(listItem);
            educationInput.value = "";
        }
    });

    addWorkButton.addEventListener("click", () => {
        const work = workInput.value.trim();
        if (work) {
            workArray.push(work);
            const listItem = document.createElement("li");
            listItem.textContent = work;
            workList.appendChild(listItem);
            workInput.value = "";
        }
    });

    addSkillButton.addEventListener("click", () => {
        const skill = skillInput.value.trim();
        if (skill) {
            skillArray.push(skill);
            const listItem = document.createElement("li");
            listItem.textContent = skill;
            skillList.appendChild(listItem);
            skillInput.value = "";
        }
    });

    generateResumeButton.addEventListener("click", () => {
        resumeOutput.innerHTML = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> ${nameInput.value}</p>
            <p><strong>Email:</strong> ${emailInput.value}</p>
            <p><strong>Phone:</strong> ${phoneInput.value}</p>
            <h3>Education</h3>
            <ul>${educationArray.map(edu => `<li>${edu}</li>`).join('')}</ul>
            <h3>Work Experience</h3>
            <ul>${workArray.map(work => `<li>${work}</li>`).join('')}</ul>
            <h3>Skills</h3>
            <ul>${skillArray.map(skill => `<li>${skill}</li>`).join('')}</ul>
        `;
    });
});


