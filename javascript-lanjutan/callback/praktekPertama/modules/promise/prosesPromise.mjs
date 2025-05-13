import { stepA } from "./stepA.mjs";
import { stepB } from "./stepB.mjs";
import { stepC } from "./stepC.mjs";

export async function prosesPromise() {
    try {
        const hasil1 = await stepA();
        const hasil2 = await stepB(hasil1);
        const hasil3 = await stepC(hasil2);
        console.log("Akhir : ", hasil3);
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
    }
}

// proses()
