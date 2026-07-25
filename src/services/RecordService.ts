import {api} from "@/plugins/gateway";
import {mapRecords} from "@/mappers/RecordPageMapper";
import type {RecordResponse} from "@/types/records/RecordResponse";

export class RecordService {

    static async getRecords(page: number, size: number): Promise<RecordResponse> {
        const response = await api.get("/records", {
            params: {
                page,
                size,
                sort: "borrowStartDate,desc"
            }
        });

        return mapRecords(response.data);
    }
}