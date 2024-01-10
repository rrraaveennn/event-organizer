import { createContext, useState } from "react";

const currentUser = {
    firstName: "Raven",
    lastName: "Dela Rama",
    email: "ravendelarama@gmail.com",
    role: "Organizer",
    service: "Birthday",
    rating: "4.2",
    address: "Manila, Philippines",
    description: "The prospect of planning a business event can trigger a lot of anxiety in an event planner. After all, it’s easy to get overwhelmed by the many different types of events you can choose from. And yet, each event type plays an important role in a company’s event marketing strategy. Fortunately, you don’t have to make that choice alone.We’ve compiled a list of eight types of events to make sure you start off in the right direction.No matter your business goals, there’s a strong probability that one of these choices will send you, your sponsors, and your attendees home happy."
};

export const UserContext = createContext(currentUser);

export default function UserProvider({children}) {
    const [user, setUser] = useState(currentUser);

    const { Provider } = UserContext;

    return <Provider value={{
        user,
        setUser
    }}>
        {children}
    </Provider>
}