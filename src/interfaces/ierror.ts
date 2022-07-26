export interface IErrorRequest extends Error{
  status?: number,
  code?: number
}