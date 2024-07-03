export function validateData(data: (string | null | undefined)[]): boolean {
    for (const item of data) {
        if (item === null || item === undefined || item.trim() === '') {
            return false;
        }
    }
    return true;
}
