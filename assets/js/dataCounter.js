export const dataCounter = () => {
    const getLocation = window.location.href;
    const whichWay = getLocation.includes('index.html') ? countedProjects() : countedSkills();

    return whichWay;
}

const countedProjects = () => {
    const getLengthProjects = document.querySelectorAll("[data-project]").length;
    const getNumberOfProjects = document.querySelector('[data-datas="length"]')
    getNumberOfProjects.innerText = getLengthProjects;
}

const countedSkills = () => {
    const getLengthSkills = document.querySelectorAll("[data-skills]").length;
    const getNumberOfProjects = document.querySelector('[data-datas="length"]')
    getNumberOfProjects.innerText = getLengthSkills;
}