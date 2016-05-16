package com.mawujun.constant;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;


import com.mawujun.service.AbstractService;


import com.mawujun.constant.CodeItem;
import com.mawujun.constant.CodeItemRepository;


/**
 * @author mawujun qq:16064988 e-mail:mawujun1234@163.com 
 * @version 1.0
 * @since 1.0
 */
@Service
@Transactional(propagation=Propagation.REQUIRED)
public class CodeItemService extends AbstractService<CodeItem, String>{

	@Autowired
	private CodeItemRepository codeItemRepository;
	
	@Override
	public CodeItemRepository getRepository() {
		return codeItemRepository;
	}

}
