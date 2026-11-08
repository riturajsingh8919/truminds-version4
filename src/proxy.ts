import { NextResponse, type NextRequest } from "next/server";

const documentPaths: Record<string, string> = {
  "/Services": "/services",
  "/Therapeutic-Areas": "/therapeutic-areas",
  "/Products": "/products",
  "/Give-Back": "/giving-back",
  "/Resources": "/resources",
};

export function proxy(request: NextRequest) {
  // The explicit case check avoids redirecting a lowercase route back to itself.
  const destination = documentPaths[request.nextUrl.pathname];
  if (!destination) return NextResponse.next();
  const url = request.nextUrl.clone();
  url.pathname = destination;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/Services", "/Therapeutic-Areas", "/Products", "/Give-Back", "/Resources"],
};
