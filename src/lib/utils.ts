// https://stackoverflow.com/a/39466341/916838
export function nth(n: number){return["st","nd","rd"][((n+90)%100-10)%10-1]||"th"}
