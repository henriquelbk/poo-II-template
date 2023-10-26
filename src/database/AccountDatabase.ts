import { TAccountDB } from "../types"
import { BaseDatabase } from "./BaseDatabase"

export class AccountDatabase extends BaseDatabase {
    public static TABLE_ACCOUNTS = "accounts"

    public async findAccount(q: string | undefined): Promise<TAccountDB[]> {

    }
}