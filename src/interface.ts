// INTERFACE: Good for object shapes, supports declaration merging
interface User {
    name: string;
    age: number;
}

// TYPE: More flexible, supports unions, primitives, tuples
type AdminUser = {
    name: string;
    permissions: string[];
};

// COMBINING TWO TYPES - Use intersection (&)
type SuperUser = User & AdminUser;

// READONLY - Prevents modification
interface Config {
    readonly apiUrl: string;
    readonly timeout: number;
}

// OPTIONAL - Use ? to make property optional
interface Product {
    id: number;
    name: string;
    description?: string;
    readonly sku: string;
}

// COMBINING with UNION (|)
type Account = User | AdminUser;

// EXAMPLE USAGE
const user: SuperUser = {
    name: "John",
    age: 30,
    permissions: ["read", "write"]
};

interface Order {   
    orderId: number;
    product: Product;
    quantity: number;
    status?: "pending" | "shipped" | "delivered";
}

class InterfaceExample implements Order {
    orderId: number;
    product: Product;
    quantity: number;
    status?: "pending" | "shipped" | "delivered";

    constructor(
        orderId: number,
        product: Product,
        quantity: number,
        status?: "pending" | "shipped" | "delivered"
    ) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        this.status = status;
    }
}


const order = new InterfaceExample(
    1,
    { id: 101, name: "Laptop", sku: "LAP123" },
    2,
    "pending"
);
