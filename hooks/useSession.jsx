import { useContext, useState } from "react";
import { UserContext } from "../contexts/session-provider";

function useSession() {
    const { user, setUser } = useContext(UserContext);
    return {user, setUser}
}

export default useSession;