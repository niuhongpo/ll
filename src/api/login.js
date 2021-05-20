import request from "@/utils/request";

export function code () {
  return request({
    url: '/code',
    method: 'get'
  });
};