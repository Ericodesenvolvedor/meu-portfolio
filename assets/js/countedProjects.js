export function countedProjects() {
    const getLengthProjects = document.querySelectorAll("[data-project]").length;
    const getNumberOfProjects = document.querySelector('[data-datas="length"]')
    getNumberOfProjects.innerText = getLengthProjects;
}