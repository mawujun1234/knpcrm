package com.mawujun.customer.continent;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;


import com.mawujun.service.AbstractService;


import com.mawujun.customer.continent.Country;
import com.mawujun.customer.continent.CountryRepository;


/**
 * @author mawujun qq:16064988 e-mail:mawujun1234@163.com 
 * @version 1.0
 * @since 1.0
 */
@Service
@Transactional(propagation=Propagation.REQUIRED)
public class CountryService extends AbstractService<Country, String>{

	@Autowired
	private CountryRepository countryRepository;
	
	@Override
	public CountryRepository getRepository() {
		return countryRepository;
	}

}
