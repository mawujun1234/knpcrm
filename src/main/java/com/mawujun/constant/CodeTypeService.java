package com.mawujun.constant;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;


import com.mawujun.service.AbstractService;


import com.mawujun.constant.CodeType;
import com.mawujun.constant.CodeTypeRepository;


/**
 * @author mawujun qq:16064988 e-mail:mawujun1234@163.com 
 * @version 1.0
 * @since 1.0
 */
@Service
@Transactional(propagation=Propagation.REQUIRED)
public class CodeTypeService extends AbstractService<CodeType, String>{

	@Autowired
	private CodeTypeRepository codeTypeRepository;
	
	@Override
	public CodeTypeRepository getRepository() {
		return codeTypeRepository;
	}

}
