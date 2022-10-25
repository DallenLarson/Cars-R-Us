import { getTechs, setTech } from "./database.js"

const techs = getTechs()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "tech") {
            setTech(parseInt(event.target.value))
        }
    }
)

export const Techs = () => {
    return `<h2>Technologies</h2>
        <select id="tech">
            <option value="0">☆ Choose an option ☆</option>
            ${
                techs.map(
                    (tech) => {
                        return `<option value="${tech.id}">${tech.name}</option>`
                    }
                ).join("")
            }
        </select>
    `
}