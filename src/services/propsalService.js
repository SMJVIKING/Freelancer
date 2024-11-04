import http from "./httpService";

export function changeProposalStatusApi({data,id}) {
  return http.patch(`/proposal/${id}`, data).then(({data})=>data.data);
}