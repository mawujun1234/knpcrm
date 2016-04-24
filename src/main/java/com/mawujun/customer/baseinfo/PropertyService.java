package com.mawujun.customer.baseinfo;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;


import com.mawujun.service.AbstractService;


import com.mawujun.customer.baseinfo.Property;
import com.mawujun.customer.baseinfo.PropertyRepository;


/**
 * @author mawujun qq:16064988 e-mail:mawujun1234@163.com 
 * @version 1.0
 * @since 1.0
 */
@Service
@Transactional(propagation=Propagation.REQUIRED)
public class PropertyService extends AbstractService<Property, String>{

	@Autowired
	private PropertyRepository propertyRepository;
	
	@Override
	public PropertyRepository getRepository() {
		return propertyRepository;
	}

}