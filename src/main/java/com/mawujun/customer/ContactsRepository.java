package com.mawujun.customer;

import org.springframework.stereotype.Repository;
import java.util.UUID;
import com.mawujun.repository.IRepository;

import com.mawujun.customer.Contacts;
/**
 * @author mawujun qq:16064988 e-mail:mawujun1234@163.com 
 * @version 1.0
 * @since 1.0
 */
@Repository
public interface ContactsRepository extends IRepository<Contacts, String>{


}
