// JWT authentication and role/row-scope helpers.
import jwt from 'jsonwebtoken';
export function authenticate(req,res,next){const h=req.headers.authorization||'';const t=h.startsWith('Bearer ')?h.slice(7):null;if(!t)return res.status(401).json({message:'Authentication required'});try{req.user=jwt.verify(t,process.env.JWT_SECRET);next();}catch{return res.status(401).json({message:'Invalid or expired session'});}}
export const allow=(...roles)=>(req,res,next)=>roles.includes(req.user.role)?next():res.status(403).json({message:'Insufficient permission'});
export function scopeSql(user, alias='s'){if(user.role==='ADMIN') return {sql:'',params:[]};if(user.role==='SUPERVISOR') return {sql:` AND ${alias}.area_id=?`,params:[user.areaId]};return {sql:` AND ${alias}.surveyor_id=?`,params:[user.id]};}
