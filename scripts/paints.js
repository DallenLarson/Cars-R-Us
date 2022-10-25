import { getPaints, setPaint } from "./database.js"

const paints = getPaints()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paint") {
            setPaint(parseInt(event.target.value))
        }
    }
)

export const Paints = () => {
    return `<h2>Paints</h2>
        <select id="paint">
            <option value="0">☆ Choose an option ☆</option>
            ${
                paints.map(
                    (paint) => {
                        return `<option value="${paint.id}">${paint.name}</option>`
                    }
                ).join("")
            }
        </select>
    `
}