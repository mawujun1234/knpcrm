package com.mawujun.customer;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;


import com.mawujun.service.AbstractService;


import com.mawujun.customer.Customer;
import com.mawujun.customer.CustomerRepository;


/**
 * @author mawujun qq:16064988 e-mail:mawujun1234@163.com 
 * @version 1.0
 * @since 1.0
 */
@Service
@Transactional(propagation=Propagation.REQUIRED)
public class CustomerService extends AbstractService<Customer, String>{

	@Autowired
	private CustomerRepository customerRepository;
	
	@Override
	public CustomerRepository getRepository() {
		return customerRepository;
	}

}
