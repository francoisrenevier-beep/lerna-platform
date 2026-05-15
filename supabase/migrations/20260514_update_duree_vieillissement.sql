-- Mise à jour des durées : formation Handicap et vieillissement (20 min par module)

update formations
set duree_estimee_minutes = 120
where id = 'dad21cb5-e946-4e13-a175-8fbf3120cbc9';

update modules set duree_minutes = 20
where formation_id = 'dad21cb5-e946-4e13-a175-8fbf3120cbc9';
