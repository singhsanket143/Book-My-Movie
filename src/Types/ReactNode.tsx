import { ReactChild, ReactFragment, ReactPortal } from "react";

type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

export default ReactNode;