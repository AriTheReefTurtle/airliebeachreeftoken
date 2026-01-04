// /lib/pi-login.ts

export async function piLogin() {
  console.log("🔥 piLogin() was called");
  console.log("window.Pi =", (window as any).Pi);

  try {
    if (typeof window === "undefined" || !("Pi" in window)) {
      console.error("❌ Pi SDK not found. Are you running inside Pi Browser?");
      return;
    }

    // @ts-ignore
    const Pi = window.Pi;

    console.log("✅ Pi SDK detected, initializing…");
    Pi.init({ version: "2.0" });

    console.log("➡️ Calling Pi.authenticate…");

    // Request Pi authentication
    const authResult = await Pi.authenticate(
      { permissions: ["username"] },
      onIncompletePaymentFound
    );

    console.log("✅ Pi.authenticate() returned:", authResult);

    const { user, accessToken } = authResult;

    console.log("👤 Pi user:", user);
    console.log("🔑 Access token:", accessToken);

    // Send token to backend for verification
    console.log("➡️ Sending token to backend /api/pi/verify…");

    const verifyRes = await fetch("/api/pi/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ accessToken }),
    });

    const data = await verifyRes.json();

    console.log("📨 Backend response:", data);

    if (!verifyRes.ok) {
      console.error("❌ Backend verification failed:", data);
      alert("Pi verification failed.");
      return;
    }

    console.log("🎉 Verified Pi user:", data.user);

    // Store user locally
    localStorage.setItem("airlieUser", JSON.stringify(data.user));

    alert(`Welcome ${data.user.username}!`);
  } catch (error) {
    console.error("💥 Pi login failed:", error);
  }
}

function onIncompletePaymentFound(payment: any) {
  console.log("⚠️ Incomplete payment found:", payment);
}
