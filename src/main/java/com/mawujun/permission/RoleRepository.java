package com.mawujun.permission;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.mawujun.repository.IRepository;
/**
 * @author mawujun qq:16064988 e-mail:mawujun1234@163.com 
 * @version 1.0
 * @since 1.0
 */
@Repository
public interface RoleRepository extends IRepository<Role, String>{
	public List<String> querySelBrand(String role_id );
	public List<String> querySelClass(String role_id );
	
	public List<String> queryUserSelBrand(String user_id );
	public List<String> queryUserSelClass(String user_id );

}
