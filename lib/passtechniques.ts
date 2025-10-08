import bcrypt from "bcrypt";

export async function hashPassword(password: string) {
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash(password as string,salt);
    return pass;
}

export async function compare(password: string,hashedpassword: string) {
    const res = await bcrypt.compare(password,hashedpassword);
    return res;
}

