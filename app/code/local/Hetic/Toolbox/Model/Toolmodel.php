<?php

// Noter que l'on utilise comme nom de classe : Hetic_Toolbox_Model_[nom_fichier]

class Hetic_Toolbox_Model_Toolmodel extends Mage_Core_Model_Abstract {

  // Une fonction permettant de lister 2 catégories
  public function getHighlightCategories() {

    $cats = Mage::getModel("catalog/category") // Utilisation d'un modèle existant de magento
        ->getCollection()
        ->addAttributeToSelect("*")
        //->addFieldToFilter('highlight', 1) // il faudra créer l'attribut 'highlight' pour utiliser ce code
        ->addIsActiveFilter()
        //->addAttributeToFilter('level', array('eq'=>2)) // exemple de filtre pour avoir uniquement de second niveau
        ->setPageSize(2); 

    return $cats;

    }
}
