import CartBadge from "./CartBadge"
import "../Store.css"

const Store = () => {
    return (
        <div>
            <CartBadge count={2} />
        </div>
    )
}

export default Store;