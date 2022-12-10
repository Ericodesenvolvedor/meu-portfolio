export const dataCounter = () => {
    const getLocation = window.location.href;
    const whichWay = getLocation.includes('skills.html') ? countedSkills() : countedProjects();

    return whichWay;
}

const countedProjects = () => {
    const getLengthProjects = document.querySelectorAll("[data-project]").length;
    const getNumberOfProjects = document.querySelector('[data-datas="length"]')
    getNumberOfProjects.innerText = getLengthProjects;
}

const countedSkills = () => {
    const getLengthSkills = document.querySelectorAll("[data-skills]").length;
    const getNumberOfSkills = document.querySelector('[data-datas="length"]')
    getNumberOfSkills.innerText = getLengthSkills;
}