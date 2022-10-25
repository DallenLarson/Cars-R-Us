import { getOrders } from "./database.js"
import { getPaints } from "./database.js"
import { getInteriors } from "./database.js"
import { getTechs } from "./database.js"
import { getWheels } from "./database.js"

const paints = getPaints()
const interiors = getInteriors()
const techs = getTechs()
const wheels = getWheels()

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

const buildOrderListItem = (order) => {
    // Remember that the function you pass to find() must return true/false
        const foundPaint = paints.find(
            (paint) => {
                return paint.id === order.paintId
            }
        )
    
        const foundInterior = interiors.find(
            (interior) => {
                return interior.id === order.interiorId
            }
        )
    
        const foundTech = techs.find(
            (tech) => {
                return tech.id === order.techId
            }
        )
    
        const foundWheel = wheels.find(
            (wheel) => {
                return wheel.id === order.wheelId
            }
        )

        const totalCost = foundPaint.price + foundInterior.price + foundTech.price + foundWheel.price
    
        const costString = totalCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
       
        return `<li>► Order #${order.id} (Options: ${order.paintId}, ${order.interiorId}, ${order.techId}, ${order.wheelId}) cost <i>${costString}</i>.</li>`
    
    }